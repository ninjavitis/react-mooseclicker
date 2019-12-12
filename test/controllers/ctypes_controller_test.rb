require 'test_helper'

class CtypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ctypes_index_url
    assert_response :success
  end

end
