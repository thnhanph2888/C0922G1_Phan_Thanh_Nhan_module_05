import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { AngularShowPetInfoComponent } from './angular-show-pet-info/angular-show-pet-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoDeleteComponent } from './todo/todo-delete/todo-delete.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    AngularShowPetInfoComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
    ArticleComponent,
    LikeComponent,
    ProgressBarComponent,
    RatingChildComponent,
    CountdownTimerComponent,
    RegisterComponent,
    FormLoginComponent,
    TimelinesComponent,
    TodoDeleteComponent,
    TodoListComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
