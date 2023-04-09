import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuentraElTesoroComponent } from './pages/encuentra-el-tesoro/encuentra-el-tesoro.component';
import { QuienComponent } from './pages/quien/quien.component';
import { PlanetasComponent } from './pages/atrapame/planetas.component';
import { MemoryComponent } from './pages/memory/memory.component';

const routes: Routes = [
  {
    path: "encuentraeltesoro", component: EncuentraElTesoroComponent
  }, {
    path: "quien", component: QuienComponent
  }, {
    path: "planetas", component: PlanetasComponent
  }, {
    path: "memory", component: MemoryComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
