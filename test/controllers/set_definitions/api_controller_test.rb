require 'test_helper'

class SetDefinitions::ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get set_definitions_api_index_url
    assert_response :success
  end

  test "should get create" do
    get set_definitions_api_create_url
    assert_response :success
  end

  test "should get update" do
    get set_definitions_api_update_url
    assert_response :success
  end

  test "should get destroy" do
    get set_definitions_api_destroy_url
    assert_response :success
  end

  test "should get show" do
    get set_definitions_api_show_url
    assert_response :success
  end

end
