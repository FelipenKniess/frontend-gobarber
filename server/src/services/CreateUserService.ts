import { getRepository } from 'typeorm';
import User from '../models/user';
import { hash } from 'bcryptjs';

import appError from '../errors/AppError';
import AppError from '../errors/AppError';


interface Request {
    name: string,
    email: string,
    password:string
}

class CreateUserService {
    public async execute({name, email, password}: Request): Promise<User>{
        const userRepository = getRepository(User);

        const checkEmailExist = await userRepository.findOne({
            where: { email}
        });

        if (checkEmailExist){
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const newUser = userRepository.create({
            name,
            email,
            password: hashedPassword,
        })

        await userRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;
