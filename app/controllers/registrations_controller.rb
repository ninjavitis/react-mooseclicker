class RegistrationsController < DeviseTokenAuth::RegistrationsController
  def create
    super do |resource|
      moose = resource.createMoose(resource.id)
      resource.activeMoose = moose.id
      resource.save
    end
  end
end
