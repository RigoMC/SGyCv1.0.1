import { RouterModule, Routes} from '@angular/router';
import { BodyComponent as inicio} from './paginas/inicio/body/body.component';
import { BodyComponent as almacen} from './paginas/almacen/body/body.component';
import { BodyComponent as comandas} from './paginas/comandas/body/body.component';
import { BodyComponent as calculos } from './paginas/calculos/body/body.component';
import { BodyComponent as estadisticas} from './paginas/estadisticas/body/body.component';
import { BodyComponent as personal} from './paginas/personal/body/body.component';
import { BodyComponent as productos} from './paginas/productos/body/body.component';


const APP_ROUTES: Routes = [
  { path: 'Inicio', component: inicio },
  { path: 'Almacen', component: almacen },
  { path: 'Comandas', component: comandas },
  { path: 'Calculos', component: calculos },
  { path: 'Estadisticas', component: estadisticas },
  { path: 'Personal', component: personal },
  { path: 'Productos', component: productos },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
