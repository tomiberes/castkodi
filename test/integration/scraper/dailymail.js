import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("Scraper: Daily Mail", function () {
    it("should return audio URL", async function () {
        const url = "https://www.dailymail.co.uk/sciencetech/article-8057229" +
                                  "/Scientists-create-stunning-gifs-Mars-sand" +
                                "-dunes-understand-conditions-impact-them.html";
        const options = { depth: 0, incognito: false };
        const expected = "https://videos.dailymail.co.uk/video/mol/2019/12/12" +
                    "/4423536678317962457/1024x576_MP4_4423536678317962457.mp4";

        const file = await extract(new URL(url), options);
        assert.strictEqual(file, expected);
    });
});
