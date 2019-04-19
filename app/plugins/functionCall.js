import { JSDOC } from "..\\lib\\JSDOC\\DocComment.js";
JSDOC.PluginManager.registerPlugin(
	"JSDOC.functionCall",
	{
		onFunctionCall: function(functionCall) {
			if (functionCall.name == "dojo.define" && functionCall.arg1) {
				functionCall.doc = "/** @lends "+eval(functionCall.arg1)+".prototype */";
			}
		}
	}
);