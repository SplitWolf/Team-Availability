import { Routes } from '@angular/router';
import { DateBarComponent } from './date-bar/date-bar.component';
import { AvailableTimeEditorComponent} from './available-time-editor/available-time-editor.component'

export const routes: Routes = [
  {
    path: "date-bar",
    component: DateBarComponent
  },
  {
    path: "availabe-time-editor",
    component: AvailableTimeEditorComponent
  }
];
