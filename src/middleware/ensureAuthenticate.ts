import { Request, Response, NextFunction } from "express"; 
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).json({
      errorCode: "token.invalid"
    });
  }
  //[0] o split vai colocar o Bearer
  ///[1] o split vai colocar o token kk1113438f8d8g8a99afjh82huh82
  const [,token] =authToken.split(" ")
  try{
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload; 
    request.user_id = sub
    return next();
  }catch(err){
    return response.status(401).json({erroCode: "token.expired"})
  }
}