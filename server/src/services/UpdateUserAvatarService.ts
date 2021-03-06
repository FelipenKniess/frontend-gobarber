import User from "../models/user";
import {getRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import appError from '../errors/AppError';
import AppError from "../errors/AppError";

interface Request {
    user_id: string,
    avatarFileName: string
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFileName }: Request): Promise<User>{
        const usersRepository = getRepository(User);

        const UserFind = await usersRepository.findOne(user_id);

        if(!UserFind){
            throw new AppError('Only authenticated users can change avatar');
        }

        if(UserFind.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory, UserFind.avatar);
            const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

            if(userAvatarFileExist) {
                await fs.promises.unlink(userAvatarFilePath)
            }
        }

        UserFind.avatar = avatarFileName;

        await usersRepository.save(UserFind);

        return UserFind;

    }
}

export default UpdateUserAvatarService;