import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Douglas",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReacJS",
        educator: "Douglas"
    })

    return res.send();
}