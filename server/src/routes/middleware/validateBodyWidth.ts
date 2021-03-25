import express from "express";

function mapValidationErrors(errors: any) {
    return errors.reduce(
        (errors: any, {field, message}: {field:any,message:any}) => ({ ...errors, [field]: message }), {} );
}

export default function validateBodyWith(validator: any) {

   return ( req:express.Request, res:express.Response, next:any ) => {

    const result: boolean = validator( req.body );

    // Body data valid! Continue to the next step...
    if( true === result ) return next();

    console.log(result);

    // Validation failed! Send and error response.
    res.status(400).json( mapValidationErrors(result) );
   }
}