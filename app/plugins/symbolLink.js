import { JSDOC } from "..\\lib\\JSDOC\\DocComment.js";
JSDOC.PluginManager.registerPlugin(
	"JSDOC.symbolLink",
	{
		onSymbolLink: function(link) {
			// modify link.linkPath
			// or link.linkText here
		}
	}
);