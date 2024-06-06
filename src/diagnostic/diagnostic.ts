import * as vscode from "vscode";
import appBinding from "./appBinding";
import asset from "./asset";
import config from "./config";
import env from "./env";
import inertia from "./inertia";
import view from "./view";

const collection = vscode.languages.createDiagnosticCollection("laravel");

const providers = [appBinding, asset, config, env, inertia, view];

export const updateDiagnostics = (
    editor: vscode.TextEditor | undefined,
): void => {
    collection.clear();

    if (!editor) {
        return;
    }

    const document = editor.document;

    if (!document) {
        return;
    }

    collection.set(
        document.uri,
        providers.map((provider) => provider(document)).flat(),
    );
};