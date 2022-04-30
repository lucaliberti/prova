/*
  # cd /src/app
  # ng generate class Models/airDataset --type=model

    CREATE src/app/Models/air-dataset.model.spec.ts (177 bytes)
    CREATE src/app/Models/air-dataset.model.ts (28 bytes)

*/


export class AirDataset {
    data: Date;
    descrizione: string;
    previsione: string;
    tendenza: string;
}
