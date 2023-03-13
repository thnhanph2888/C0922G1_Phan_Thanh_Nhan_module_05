import {Component, OnInit} from '@angular/core';
import {Song} from "../model/song";
import {SongService} from "../service/song.service";

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  playlist: Song[] = [];

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
