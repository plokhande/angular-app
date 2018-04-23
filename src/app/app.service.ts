import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService{
    constructor(){}
    showTodayDate(){
        return new Date();
    }
}