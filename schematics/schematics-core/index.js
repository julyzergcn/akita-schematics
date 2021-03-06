"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = exports.stringUtils = exports.isLib = exports.getProject = exports.getProjectPath = exports.buildRelativePath = exports.findModuleFromOptions = exports.findModule = exports.getWorkspacePath = exports.getWorkspace = exports.commitChanges = exports.createChangeRecorder = exports.createReplaceChange = exports.ReplaceChange = exports.RemoveChange = exports.InsertChange = exports.NoopChange = exports.containsProperty = exports.replaceImport = exports.addProviderToModule = exports.addImportToModule = exports.addExportToModule = exports.addDeclarationToModule = exports.addBootstrapToModule = exports.insertImport = exports.insertAfterLastOccurrence = exports.getContentOfKeyLiteral = exports.getDecoratorMetadata = exports.getSourceNodes = exports.findNodes = void 0;
const strings_1 = require("./utility/strings");
var ast_utils_1 = require("../ng-g/utils/ast-utils");
Object.defineProperty(exports, "findNodes", { enumerable: true, get: function () { return ast_utils_1.findNodes; } });
Object.defineProperty(exports, "getSourceNodes", { enumerable: true, get: function () { return ast_utils_1.getSourceNodes; } });
Object.defineProperty(exports, "getDecoratorMetadata", { enumerable: true, get: function () { return ast_utils_1.getDecoratorMetadata; } });
Object.defineProperty(exports, "getContentOfKeyLiteral", { enumerable: true, get: function () { return ast_utils_1.getContentOfKeyLiteral; } });
Object.defineProperty(exports, "insertAfterLastOccurrence", { enumerable: true, get: function () { return ast_utils_1.insertAfterLastOccurrence; } });
Object.defineProperty(exports, "insertImport", { enumerable: true, get: function () { return ast_utils_1.insertImport; } });
Object.defineProperty(exports, "addBootstrapToModule", { enumerable: true, get: function () { return ast_utils_1.addBootstrapToModule; } });
Object.defineProperty(exports, "addDeclarationToModule", { enumerable: true, get: function () { return ast_utils_1.addDeclarationToModule; } });
Object.defineProperty(exports, "addExportToModule", { enumerable: true, get: function () { return ast_utils_1.addExportToModule; } });
Object.defineProperty(exports, "addImportToModule", { enumerable: true, get: function () { return ast_utils_1.addImportToModule; } });
Object.defineProperty(exports, "addProviderToModule", { enumerable: true, get: function () { return ast_utils_1.addProviderToModule; } });
Object.defineProperty(exports, "replaceImport", { enumerable: true, get: function () { return ast_utils_1.replaceImport; } });
Object.defineProperty(exports, "containsProperty", { enumerable: true, get: function () { return ast_utils_1.containsProperty; } });
var change_1 = require("../ng-g/utils/change");
Object.defineProperty(exports, "NoopChange", { enumerable: true, get: function () { return change_1.NoopChange; } });
Object.defineProperty(exports, "InsertChange", { enumerable: true, get: function () { return change_1.InsertChange; } });
Object.defineProperty(exports, "RemoveChange", { enumerable: true, get: function () { return change_1.RemoveChange; } });
Object.defineProperty(exports, "ReplaceChange", { enumerable: true, get: function () { return change_1.ReplaceChange; } });
Object.defineProperty(exports, "createReplaceChange", { enumerable: true, get: function () { return change_1.createReplaceChange; } });
Object.defineProperty(exports, "createChangeRecorder", { enumerable: true, get: function () { return change_1.createChangeRecorder; } });
Object.defineProperty(exports, "commitChanges", { enumerable: true, get: function () { return change_1.commitChanges; } });
var config_1 = require("../ng-g/utils/config");
Object.defineProperty(exports, "getWorkspace", { enumerable: true, get: function () { return config_1.getWorkspace; } });
Object.defineProperty(exports, "getWorkspacePath", { enumerable: true, get: function () { return config_1.getWorkspacePath; } });
var find_module_1 = require("../ng-g/utils/find-module");
Object.defineProperty(exports, "findModule", { enumerable: true, get: function () { return find_module_1.findModule; } });
Object.defineProperty(exports, "findModuleFromOptions", { enumerable: true, get: function () { return find_module_1.findModuleFromOptions; } });
Object.defineProperty(exports, "buildRelativePath", { enumerable: true, get: function () { return find_module_1.buildRelativePath; } });
var project_1 = require("./utility/project");
Object.defineProperty(exports, "getProjectPath", { enumerable: true, get: function () { return project_1.getProjectPath; } });
Object.defineProperty(exports, "getProject", { enumerable: true, get: function () { return project_1.getProject; } });
Object.defineProperty(exports, "isLib", { enumerable: true, get: function () { return project_1.isLib; } });
exports.stringUtils = {
    dasherize: strings_1.dasherize,
    decamelize: strings_1.decamelize,
    camelize: strings_1.camelize,
    classify: strings_1.classify,
    underscore: strings_1.underscore,
    group: strings_1.group,
    capitalize: strings_1.capitalize,
    featurePath: strings_1.featurePath,
    pluralize: strings_1.pluralize,
};
var parse_name_1 = require("./utility/parse-name");
Object.defineProperty(exports, "parseName", { enumerable: true, get: function () { return parse_name_1.parseName; } });
//# sourceMappingURL=index.js.map