import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
   iat: number
   exp: number
   client_id: string;
}

export default async function GerenteAutenticado(
   request: Request, response: Response,
   next: NextFunction,
) {
   try {
      const authHeader = request.headers.authorization;
      if (!authHeader) {
        return response.status(401).json({message: "Token não foi informado"})
      }

      const [, token] = authHeader.split(' ');

      if (!token) {
        return response.status(401).json({message: "Token não foi informado"})
      }

      const secret = process.env.JWT_SECRET;

      if (!secret) {
        return response.status(500).json({message: "JWT não configurado no servidor"})
      }

      try {
         const decoded = verify(token, secret);

         const { client_id } = decoded as TokenPayload;
         request.client = {
            id: client_id,
         };

         if (!decoded) {
            return response.status(401).json({message: "JWT Token inválido"})
         }

         return next();
      } catch (err) {
        return response.status(401).json({message: "JWT Token inválido"})
      }
   } catch (err) {
     return response.status(500).json({message: "Erro interno do servidor"})
   }
}