import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { MaterialService } from "./servicios/material.service";


//componentes
import { AppComponent } from './app.component';

//componentes comandas
import { BodyComponent as ComandasComponent} from './paginas/comandas/body/body.component';
import { InfocomComponent } from './paginas/comandas/componentes/infocom/infocom.component';
import { InfopedComponent } from './paginas/comandas/componentes/infoped/infoped.component';
import { AddpedComponent } from './paginas/comandas/componentes/addped/addped.component';
import { BarraubComponent } from './componentes/barraub/barraub.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

//componentes Calculos
import { BodyComponent as CalculosComponent} from './paginas/calculos/body/body.component';

//componentes Estadisticas
import { BodyComponent as EstadisticasComponent} from './paginas/estadisticas/body/body.component';

//componentes Inicio
import { BodyComponent as InicioComponent} from './paginas/inicio/body/body.component';
import { CardComponent } from './paginas/inicio/componentes/card/card.component';

//componentes Personal
import { BodyComponent as PersonalComponent} from './paginas/personal/body/body.component';

//componentes productos
import { BodyComponent as ProductosComponent } from './paginas/productos/body/body.component';
import { AddComponent } from './paginas/productos/componentes/add/add.component';
import { ModifyComponent } from './paginas/productos/componentes/modify/modify.component';
import { DeleteComponent } from './paginas/productos/componentes/delete/delete.component';
import { SeeComponent } from './paginas/productos/componentes/see/see.component';

//componentes almacen
import { BodyComponent as AlmacenComponent} from './paginas/almacen/body/body.component';
import { AddComponent as AddComponentAlm } from './paginas/almacen/componentes/add/add.component';
import { ModifyComponent as ModifyComponentAlm} from './paginas/almacen/componentes/modify/modify.component';
import { DeleteComponent as DeleteComponentAlm } from './paginas/almacen/componentes/delete/delete.component';
import { SeeComponent as SeeComponentAlm } from './paginas/almacen/componentes/see/see.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComandasComponent,
    CalculosComponent,
    PersonalComponent,
    ProductosComponent,
    EstadisticasComponent,
    InfocomComponent,
    InfopedComponent,
    AddpedComponent,
    BarraubComponent,
    NavbarComponent,
    CardComponent,
    AddComponent,
    ModifyComponent,
    DeleteComponent,
    SeeComponent,
    AlmacenComponent,
    AddComponentAlm,
    ModifyComponentAlm,
    DeleteComponentAlm,
    SeeComponentAlm
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
