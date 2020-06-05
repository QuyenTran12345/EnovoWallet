class BaseService {
    constructor(model) {
        this.model = model;
        this.modelName = model.name;
    }

    async getMany(query) {
        let builder = this.model.queryBuilder(query);
        if (this.getSearchQuery && query.q) {
          builder = this.getSearchQuery(builder, query.q);
        }
        return builder;
      }
      async getOne(id) {
        const result = await this.model.query().findById(id);
        if (!result) {
          throw Boom.notFound(`${this.modelName} not found`);
        }
        return result;
      }
    
      async createOne(payload) {
        return this.model
          .query()
          .insert(payload)
          .returning('*');
      }
    
      async updateOne(id, payload) {
        try {
          const result = await this.model.query().patchAndFetchById(id, payload);
          if (!result) {
            throw Boom.notFound(`${this.modelName} not found`);
          }
          return result;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    
      async deleteOne(id) {
        
        const result = await this.model.query().deleteById(id);
        if (!result) {
          throw Boom.notFound(`${this.modelName} not found`);
        }
        return { success: true };
      }
    }
    
    module.exports = BaseService; 
