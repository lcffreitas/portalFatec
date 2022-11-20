public IActionResult EnviarArquivo()

{

 try
{
 var formFile=_httpContextAcessor.HttpContext.Request.Form.Files["arquivoEnviado"];
 var nomeArquivo= formFile.FileName;
 var extensao = nomeArquivo.Split("."). Last();
 string novoNomeArquivo= GerarNovoNomeArquivo (nomeArquivo, extensao);
 var pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";
 var nomeCompleto =pastaArquivos +novoNomeArquivo;
 
 using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
 {
formFile.CopyTo(streamArquivo);
 }





}