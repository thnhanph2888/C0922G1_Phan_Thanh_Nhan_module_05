import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IWord} from "../../model/iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }
  wordObject: IWord;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.wordObject = this.dictionaryService.translate(word);
    });
  }
}
