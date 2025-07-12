export enum ContentType {
  // Comum para APIs REST
  JSON = "application/json",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
  TEXT = "text/plain",

  // Dados HTML
  HTML = "text/html",

  // Arquivos binários
  OCTET_STREAM = "application/octet-stream",

  // Arquivos específicos
  PDF = "application/pdf",
  CSV = "text/csv",
  ZIP = "application/zip",
  MSWORD = "application/msword",
  EXCEL = "application/vnd.ms-excel",
  EXCELX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  ICO = "image/x-icon",

  // Áudio e vídeo
  MP3 = "audio/mpeg",
  MP4 = "video/mp4",
  MPEG = "video/mpeg",

  // JSON para eventos (por exemplo, SSE)
  EVENT_STREAM = "text/event-stream",
}
