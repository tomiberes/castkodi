import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("Scraper: Instagram", function () {
    it("should return URL when it's not a video", async function () {
        const url = new URL("https://www.instagram.com/p/6p_BDeK-8G/");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file, url.href);
    });

    it("should return video URL [opengraph]", async function () {
        const url = new URL("https://www.instagram.com/p/BpFwZ6JnYPq/");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.ok(new URL(file).pathname.endsWith(".mp4"),
                  `new URL("${file}").pathname.endsWith(...)`);
    });

    it("should return video URL when protocol is HTTP", async function () {
        const url = new URL("https://www.instagram.com/p/Bpji87LiJFs/");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.ok(new URL(file).pathname.endsWith(".mp4"),
                  `new URL("${file}").pathname.endsWith(...)`);
    });
});
