import { Route } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocentesSalientesComponent } from './components/docentes-salientes/docentes-salientes.component';
import { EstudiantesSalientesComponent } from './components/estudiantes-salientes/estudiantes-salientes.component';
import { DocentesEntrantesComponent } from './components/docentes-entrantes/docentes-entrantes.component';
import { EstudiantesEntrantesComponent } from './components/estudiantes-entrantes/estudiantes-entrantes.component';

export const routes: Route[] = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: LandingComponent },
    { path: 'docentes-salientes', component: DocentesSalientesComponent },
    { path: 'estudiantes-salientes', component: EstudiantesSalientesComponent },
    { path: 'docentes-entrantes', component: DocentesEntrantesComponent },
    { path: 'estudiantes-entrantes', component: EstudiantesEntrantesComponent }
];