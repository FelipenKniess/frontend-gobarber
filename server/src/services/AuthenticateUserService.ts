import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/user';

interface Request {
    email: string,
    password:string
}

interface Response {
    user: User,
    token: String
}

class AuthenticateUserService {
    public async execute({email, password}: Request): Promise<Response>{
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: {email}
        })

        if(!user){
            throw new Error('username or password is incorrect');
        }

        const validatePassword = await compare(password, user.password);

        if(!validatePassword){
            throw new Error('username or password is incorrect');
        }

        const token = sign({}, 'e60f980b97448930f815ea0b67739c7d', {
            subject: user.id,
            expiresIn: '7d',

        });

        return {
            user,
            token
        };

    }
}

export default AuthenticateUserService;
