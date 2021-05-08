var isDebug = false; //true,离线打包模式，false线上模式
var chooseFileModule = (isDebug === true ? '' : 'K-') + 'ChooseFilesModule';
var fileUtilsModule = (isDebug === true ? '' : 'K-') + 'FileUtilsModule';
var pdfModule = (isDebug === true ? '' : 'K-') + 'PdfViewerModule';

module.exports = {
	isDebug,
	chooseFileModule,
	fileUtilsModule,
	pdfModule
}
