import {
  getAvatarById,
  getAvatarByUsername,
  getProfileLink,
  getRepoIssuesLink,
  generateGhOgImage,
  generateRepoParts,
  isValidIssueUrl,
} from "lib/utils/github";

describe("[lib] github methods", () => {
  it("Should return a valid avatar link", () => {
    const result = getAvatarById("Deadreyo", 460);
    expect(result).toEqual("https://avatars.githubusercontent.com/u/Deadreyo?size=460&v=4");
  });

  it("Should return a valid avatar link", () => {
    const result = getAvatarByUsername("Deadreyo", 460);
    expect(result).toEqual("https://www.github.com/Deadreyo.png?size=460");
  });

  it("Should return a valid profile link", () => {
    const result = getProfileLink("Deadreyo");
    expect(result).toEqual("https://github.com/Deadreyo");
  });

  it("Should return a valid repo issues link", () => {
    const result = getRepoIssuesLink("Deadreyo/insights");
    expect(result).toEqual("https://github.com/Deadreyo/insights/issues");
  });
  it("Should return a valid image src link", () => {
    const result = generateGhOgImage("https://github.com/khulnasoft-opensource/hot/pull/448");
    expect(result).toEqual({ isValid: true, url: "https://opengraph.githubassets.com/1/khulnasoft-opensource/hot/pull/448" });
  });
  it("Should return an object with isValid set to false", () => {
    const result = generateGhOgImage("https://gitub.com/khulnasoft-opensource/hot/pull/448");
    expect(result).toEqual({ isValid: false, url: "" });
  });
  it("Should return an object with valid org name, repo name and issue", () => {
    const result = generateRepoParts("https://github.com/khulnasoft-opensource/insights/pull/1470");
    expect(result.isValidUrl).toEqual(true);
    expect(result.apiPaths).toEqual({
      orgName: "khulnasoft-opensource",
      repoName: "insights",
      repoFullName: "khulnasoft-opensource/insights",
      issueId: "1470",
    });
  });
  it("Should return an object with valid org name, repo name and issue", () => {
    const result = generateRepoParts("github.com/khulnasoft-opensource/insights/pull/1470");
    expect(result.isValidUrl).toEqual(true);
    expect(result.apiPaths).toEqual({
      orgName: "khulnasoft-opensource",
      repoName: "insights",
      repoFullName: "khulnasoft-opensource/insights",
      issueId: "1470",
    });
  });
  it("Should return an object with a valid org name and repo name", () => {
    const result = generateRepoParts("https://github.com/khulnasoft-opensource/insights");
    expect(result.isValidUrl).toEqual(true);
    expect(result.apiPaths).toEqual({
      orgName: "khulnasoft-opensource",
      repoName: "insights",
      repoFullName: "khulnasoft-opensource/insights",
      issueId: null,
    });
  });
  it("Should return an object with a valid org name and repo name", () => {
    const result = generateRepoParts("khulnasoft-opensource/insights");
    expect(result.isValidUrl).toEqual(true);
    expect(result.apiPaths).toEqual({
      orgName: "khulnasoft-opensource",
      repoName: "insights",
      repoFullName: "khulnasoft-opensource/insights",
      issueId: null,
    });
  });
  it("Should return an object with isValidUrl set to false", () => {
    const result = generateRepoParts("https://insights.khulnasoft.com/hub/insights/new");
    expect(result.isValidUrl).toBeFalsy();
  });
  it("Should return an object with isValidUrl set to false", () => {
    const result = generateRepoParts("🍕");
    expect(result.isValidUrl).toBeFalsy();
  });
  it("Should return false", () => {
    const result = isValidIssueUrl("https://gitub.com/khulnasoft-opensource/hot/pull/448");
    expect(result).toEqual(false);
  });
  it("Should return true", () => {
    const result = isValidIssueUrl("https://github.com/khulnasoft-opensource/pizza-cli/issues/19");
    expect(result).toEqual(true);
  });
});
