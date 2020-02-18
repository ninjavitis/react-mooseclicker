require 'test_helper'

class ItemsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get items_controller_index_url
    assert_response :success
  end

  test "should get create" do
    get items_controller_create_url
    assert_response :success
  end

  test "should get show" do
    get items_controller_show_url
    assert_response :success
  end

  test "should get update" do
    get items_controller_update_url
    assert_response :success
  end

end
