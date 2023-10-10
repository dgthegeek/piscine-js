import { readFile, writeFile } from "fs/promises";
import { join, isAbsolute } from "path";

const encodeDecodeFile = async (filePath, operation, outputFileName) => {
  try {
    if (operation !== "encode" && operation !== "decode") {
      throw new Error("Invalid operation. Use 'encode' or 'decode'.");
    }

    const data = await readFile(filePath, "utf8");
    let result;

    if (operation === "encode") {
      result = Buffer.from(data).toString("base64");
    } else if (operation === "decode") {
      result = Buffer.from(data, "base64").toString();
    }

    await writeFile(outputFileName, result);
    return { success: true, message: `File ${operation}d and saved.` };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const run = async (cmd) => {
  const [filename, keyword, newFile] = cmd.split(" ");
  const filePath = isAbsolute(filename) ? filename : join(__dirname, filename);
  const outputFileName =
    newFile || (keyword === "encode" ? "cypher.txt" : "clear.txt");

  return await encodeDecodeFile(filePath, keyword, outputFileName);
};

const main = async () => {
  if (process.argv.length < 4) {
    console.error(
      "Usage: tell-it-cypher.mjs <file> <encode|decode> [outputFileName]"
    );
    process.exit(1);
  }

  const cmd = process.argv.slice(2).join(" ");
  const result = await run(cmd);

  if (result.success) {
    console.log(result.message);
  } else {
    console.error(result.message);
  }
};

main();