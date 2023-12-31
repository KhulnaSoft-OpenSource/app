import getContributorPullRequestVelocity from "lib/utils/get-contributor-pr-velocity";

const data = [
  {
    id: 1361496755,
    repo_id: 501028599,
    number: 1213,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "ci: move unit and e2e tests into separate jobs",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:ci-e2e-tests",
    target_branch: "khulnasoft-opensource:beta",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-23T14:08:34.000Z",
    closed_at: "2023-05-23T14:16:07.000Z",
    merged_at: "2023-05-23T14:16:07.000Z",
    updated_at: "2023-05-23T14:21:44.000Z",
    last_updated_at: "2023-05-23T16:02:14.554Z",
    comments: 3,
    additions: 48,
    deletions: 3,
    changed_files: 3,
    full_name: "khulnasoft-opensource/insights",
  },
  {
    id: 1357648118,
    repo_id: 499330806,
    number: 170,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "feat: add endpoints for managing user collaborations",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:feat-user-collaborations",
    target_branch: "khulnasoft-opensource:beta",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-19T20:40:52.000Z",
    closed_at: "2023-05-22T14:03:26.000Z",
    merged_at: "2023-05-22T14:03:26.000Z",
    updated_at: "2023-05-23T13:18:53.000Z",
    last_updated_at: "2023-05-23T14:16:03.974Z",
    comments: 2,
    additions: 409,
    deletions: 2,
    changed_files: 9,
    full_name: "khulnasoft-opensource/api.khulnasoft.com",
  },
  {
    id: 1361394082,
    repo_id: 499330806,
    number: 172,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "v1.36.0-beta.2 -> production",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:beta",
    target_branch: "khulnasoft-opensource:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-23T13:06:52.000Z",
    closed_at: "2023-05-23T13:12:15.000Z",
    merged_at: "2023-05-23T13:12:15.000Z",
    updated_at: "2023-05-23T13:18:47.000Z",
    last_updated_at: "2023-05-23T14:16:03.974Z",
    comments: 1,
    additions: 578,
    deletions: 8,
    changed_files: 17,
    full_name: "khulnasoft-opensource/api.khulnasoft.com",
  },
  {
    id: 1360542042,
    repo_id: 511199000,
    number: 415,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "fix(content): add markdown route component for content routes",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:fix-render-markdown",
    target_branch: "analogjs:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-23T03:43:52.000Z",
    closed_at: "2023-05-23T03:56:46.000Z",
    merged_at: "2023-05-23T03:56:46.000Z",
    updated_at: "2023-05-23T03:56:47.000Z",
    last_updated_at: "2023-05-23T16:01:48.550Z",
    comments: 3,
    additions: 56,
    deletions: 3,
    changed_files: 3,
    full_name: "analogjs/analog",
  },
  {
    id: 1360501488,
    repo_id: 511199000,
    number: 414,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "refactor: remove Angular libs from forced optimization",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:refactor-optimize-ng-deps",
    target_branch: "analogjs:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-23T02:57:53.000Z",
    closed_at: "2023-05-23T03:35:48.000Z",
    merged_at: "2023-05-23T03:35:48.000Z",
    updated_at: "2023-05-23T03:35:49.000Z",
    last_updated_at: "2023-05-23T16:01:48.550Z",
    comments: 3,
    additions: 5,
    deletions: 16,
    changed_files: 2,
    full_name: "analogjs/analog",
  },
  {
    id: 1357276864,
    repo_id: 501028599,
    number: 1205,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "feat: add OpenGraph image for individual highlights",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:feat-highlight-social-card",
    target_branch: "khulnasoft-opensource:beta",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-19T14:56:59.000Z",
    closed_at: "2023-05-19T15:57:48.000Z",
    merged_at: "2023-05-19T15:57:48.000Z",
    updated_at: "2023-05-19T16:02:39.000Z",
    last_updated_at: "2023-05-23T16:02:14.554Z",
    comments: 3,
    additions: 189,
    deletions: 120,
    changed_files: 2,
    full_name: "khulnasoft-opensource/insights",
  },
  {
    id: 1181031673,
    repo_id: 511199000,
    number: 192,
    state: "OPEN",
    draft: false,
    merged: false,
    mergeable: false,
    rebaseable: false,
    title: "build: migrate to pnpm",
    source_label: null,
    target_label: null,
    source_branch: "brandonroberts:vite-3-ci",
    target_branch: "analogjs:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2022-12-30T16:38:13.000Z",
    closed_at: null,
    merged_at: null,
    updated_at: "2023-05-19T14:51:57.000Z",
    last_updated_at: "2023-05-23T16:01:48.550Z",
    comments: 5,
    additions: 22780,
    deletions: 20001,
    changed_files: 6,
    full_name: "analogjs/analog",
  },
  {
    id: 1356454399,
    repo_id: 511199000,
    number: 402,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "feat(vite-plugin-nitro): add BUILD_PRESET as a server preset alias",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:feat-build-preset",
    target_branch: "analogjs:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-19T01:05:53.000Z",
    closed_at: "2023-05-19T01:44:51.000Z",
    merged_at: "2023-05-19T01:44:51.000Z",
    updated_at: "2023-05-19T01:44:53.000Z",
    last_updated_at: "2023-05-23T16:01:48.550Z",
    comments: 3,
    additions: 6,
    deletions: 5,
    changed_files: 3,
    full_name: "analogjs/analog",
  },
  {
    id: 1315260200,
    repo_id: 37953959,
    number: 3093,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "fix(@nguniversal/express-engine): export default bootstrap in server template for standalone apps",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:fix-standalone-prerender",
    target_branch: "angular:main",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-04-15T21:55:37.000Z",
    closed_at: "2023-04-18T12:22:18.000Z",
    merged_at: "2023-04-18T12:22:18.000Z",
    updated_at: "2023-05-19T00:09:53.000Z",
    last_updated_at: "2023-05-23T16:04:14.864Z",
    comments: 1,
    additions: 1,
    deletions: 1,
    changed_files: 1,
    full_name: "angular/universal",
  },
  {
    id: 1356191185,
    repo_id: 499330806,
    number: 168,
    state: "MERGED",
    draft: false,
    merged: true,
    mergeable: false,
    rebaseable: false,
    title: "feat: add endpoint to generate pull request description",
    source_label: "",
    target_label: "",
    source_branch: "brandonroberts:feat-generate-pr-description",
    target_branch: "khulnasoft-opensource:beta",
    author_login: "brandonroberts",
    author_avatar: "https://avatars.githubusercontent.com/u/42211?u=32763fc85100fa45c5aa5d4bdddc4344e53d0173&v=4",
    assignee_login: "",
    assignee_avatar: "",
    created_at: "2023-05-18T19:40:00.000Z",
    closed_at: "2023-05-18T20:01:40.000Z",
    merged_at: "2023-05-18T20:01:40.000Z",
    updated_at: "2023-05-18T20:17:52.000Z",
    last_updated_at: "2023-05-23T14:16:03.974Z",
    comments: 3,
    additions: 184,
    deletions: 3,
    changed_files: 7,
    full_name: "khulnasoft-opensource/api.khulnasoft.com",
  },
] as DbRepoPR[];

describe("[lib] getContributorPullRequestVelocity()", () => {
  it("should return the average velocity", () => {
    const result = getContributorPullRequestVelocity(data);

    expect(result).toEqual(1);
  });

  it("should return undefined if no records are provided", () => {
    const result = getContributorPullRequestVelocity([]);

    expect(result).toBeUndefined();
  });
});
