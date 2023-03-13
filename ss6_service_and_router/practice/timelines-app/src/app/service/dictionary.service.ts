import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  wordList: IWord[] = [
    {
      word: 'hello',
      mean: 'xin chao'
    },
    {
      word: 'delete',
      mean: 'xóa'
    },
    {
      word: 'increase',
      mean: 'tăng lên'
    },
    {
      word: 'decrease',
      mean: 'giảm'
    }
  ]

  getAll():IWord[] {
    return this.wordList;
  }

  translate(wordTranslate: string): IWord {
    return this.wordList.filter(word => word.word === wordTranslate)[0];
  }
}
