"use strict";

module.exports = {
  "* * * * *": async () => {
    const draftArticleToPublish = await strapi.services.article.find({
      status: "draft",
      publish_at_lt: new Date(),
    });

    draftArticleToPublish.forEach(async (article) => {
      await strapi.services.article.update(
        { id: article.id },
        { status: "published" }
      );
    });
  },
};
