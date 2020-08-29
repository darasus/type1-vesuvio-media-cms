"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    let entities;

    if (ctx.query._q) {
      entities = await strapi.services.site.search(ctx.query).models;
    } else {
      entities = await strapi.services.site.find(ctx.query);
    }

    return entities
      .map((entity) => {
        entity = {
          ...entity,
          articles: entity.articles.filter(
            (article) => article.status === "published"
          ),
        };
        return entity;
      })
      .map((entity) => sanitizeEntity(entity, { model: strapi.models.site }));
  },
  async findOne(ctx) {
    let entity;

    entity = await strapi.services.site.findOne({ id: ctx.params.id });

    console.log(entity);

    return sanitizeEntity(
      {
        ...entity,
        articles: [
          ...entity.articles.filter(
            (article) => article.status === "published"
          ),
        ],
      },
      { model: strapi.models.site }
    );
  },
};
