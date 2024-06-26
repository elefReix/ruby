import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Task {
 title:string,
 subtitle:string,
 description:string,
 icon:string,
 path:string
} 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  todo_list :Task[] = [] 

  constructor(private navCtrl: NavController) {
    this.todo_list.push({
      title:"GENERAR NOMINA", 
      subtitle:"xlsx format", 
      description:'Proceso para generar archivo de excel de la nomnina',
      icon:'cloud-download-outline',
      path:'nomina'
  })
    this.todo_list.push({
      title:"AGREGAR TAREA", 
      subtitle:"xlsx format", 
      description:'Proceso para generar archivo de excel de la nomnina',
      icon:'add-circle-outline',
      path:'home'
  })
    this.todo_list.push({
      title:"AGENDAR JUNTA", 
      subtitle:"xlsx format", 
      description:'Proceso para generar archivo de excel de la nomnina',
      icon:'today-outline',
      path:'login'
  })

  }

  goTo(path:string){
    this.navCtrl.navigateForward(path)
  }

}
