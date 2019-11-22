class RegistrationsController < DeviseTokenAuth::RegistrationsController
  def create
    super do |resource|
      resource.createMoose(resource.id)
    end
  end
end
