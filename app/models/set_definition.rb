class SetDefinition < ApplicationRecord
  belongs_to :req1, :class_name => 'SetRequirement'
  belongs_to :req2, :class_name => 'SetRequirement', optional: true
  belongs_to :req3, :class_name => 'SetRequirement', optional: true
  belongs_to :req4, :class_name => 'SetRequirement', optional: true
  belongs_to :req5, :class_name => 'SetRequirement', optional: true
end
