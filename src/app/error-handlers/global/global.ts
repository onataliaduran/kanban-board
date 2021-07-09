import { ErrorHandler } from '@angular/core';

export class Global implements ErrorHandler {
    handleError(error) {
       console.log('Custome global error handler', error);
    }
}
