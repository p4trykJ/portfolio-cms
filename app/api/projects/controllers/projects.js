"use strict";

const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const entities = await strapi.services.projects.find(ctx.query);

    return entities.map((entity) => {
      const project = sanitizeEntity(entity, { model: strapi.models.projects });
      delete project.description;
      return project;
    });
  },
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.projects.findOne({ name: id });
    return sanitizeEntity(entity, { model: strapi.models.projects });
  },
};
