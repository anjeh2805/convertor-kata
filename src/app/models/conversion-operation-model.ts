
export class ConversionOperationModel {

     /**
      * The real rate of conversion.
      */
     public rate: number;
     /**
      * The fixed rate.
      */
     public fixedRate: number;
     /**
      * the initial value.
      */
     public initialValue: number;
     /**
      * The devise of the initial value.
      */
     public initialDevise: string;
     /**
      * The devise of the calculated value.
      */
     public calculatedDevise: string;
     /**
      * The calculated value.
      */
     public calculatedValue: number;

}
