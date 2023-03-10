interface Course {
    name: string;
    duration?: number; // Atributo opcional, não é obrigatório
    educator: string;
}

class CreateCourseService {
    execute({duration = 8, educator, name}: Course) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService;