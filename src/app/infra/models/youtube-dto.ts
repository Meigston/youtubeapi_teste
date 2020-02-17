export class YoutubeDto {
  kind = 'youtube#searchResult';
  etag: any;
  id: TypeId;
  snippet: Snippet;
}

export class TypeId {
  kind: string;
  videoId: string;
  channelId: string;
  playlistId: string;
}

export class Thumbnails {
  default: Image;
  medium: Image;
  high: Image;
}

export class Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
}

export class Image {
  url: string;
  width?: number;
  height?: number;
}
