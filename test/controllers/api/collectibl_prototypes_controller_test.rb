require 'test_helper'

class Api::CollectiblPrototypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_collectibl_prototypes_index_url
    assert_response :success
  end

end
