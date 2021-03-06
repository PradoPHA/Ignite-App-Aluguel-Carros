import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController} from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";


const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export {createSpecificationController};
