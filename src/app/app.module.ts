import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios

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

//componentes Personal
import { BodyComponent as PersonalComponent} from './paginas/personal/body/body.component';

//componentes productos
import { BodyComponent as ProductosComponent } from './paginas/productos/body/body.component';


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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
