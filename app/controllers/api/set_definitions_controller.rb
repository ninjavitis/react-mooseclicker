class Api::SetDefinitionsController < ApplicationController
  def index
    # query all the set definitions from the database along with their optional requirements
    @SetDefinitions = SetDefinition.all.includes(:req1, :req2, :req3, :req4, :req5).map{ |definition| 

    # make an array of all the optional set requirements so we can iterate over them
    reqs = [definition.req1,definition.req2,definition.req3,definition.req4,definition.req5]

    # only return requirements where requirement is not null 
    requirements = reqs.select{ |req| !req.nil? }.map{ |r| {type:r.key, pattern:r.value}}

    #create the JSON object for use in the frontend
    {
      id:definition.id,
      name:definition.name,
      tier:definition.tier,
      point_reward:definition.point_reward,
      requirements:requirements,
    }
  }
    render json: @SetDefinitions
  end

  def new
    @SetDefinition = SetDefinition.new
  end

  def create
    @SetDefinition = SetDefinition.create(setDefinitionParams)
    if @SetDefinition.save
      render json: @SetDefinition
    else
      render json: @SetDefinition.errors, status: 422
    end
  end

  def update
    @SetDefinition = SetDefinition.find(params[:id])
    @SetDefinition.update(setDefinitionParams)
    render json: @SetDefinition
  end

  def destroy
    @SetDefinition = SetDefinition.find(params[:id])
    @SetDefinition.destroy
  end

  def show
    @SetDefinition = SetDefinition.find(params[:id])
  end

  private
  def set_definition_params
    params.require(:set_definitions).permit(:name, :tier, :point_reward, :req1, :req2, :req3, :req4, :req5 )
  end
end
