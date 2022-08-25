import { AbstractRepository } from "../services/abstract-repository";
import { AppConstants } from "./app-constants";

export class OperationUtils {
  delete<TypeModel, TypeService extends AbstractRepository<TypeModel>>(
    service: TypeService,
    id: number,
    nameModel: string
  ): void {
    service.deleteById(id);
  }

  getEnvBaseUrl(modelUrl: string) {

    switch (AppConstants.ENV) {
      case AppConstants.ENV_DEV:
        return AppConstants.BASE_URL_DEV + `${modelUrl}`;
      case AppConstants.ENV_PROD:
        return AppConstants.BASE_URL_PROD + `${modelUrl}`;
      default:
        return AppConstants.BASE_URL_DEV + `${modelUrl}`;
    }
  }
}
