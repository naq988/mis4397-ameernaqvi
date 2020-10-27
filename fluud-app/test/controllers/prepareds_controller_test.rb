require 'test_helper'

class PreparedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prepared = prepareds(:one)
  end

  test "should get index" do
    get prepareds_url
    assert_response :success
  end

  test "should get new" do
    get new_prepared_url
    assert_response :success
  end

  test "should create prepared" do
    assert_difference('Prepared.count') do
      post prepareds_url, params: { prepared: { button: @prepared.button, description: @prepared.description, image: @prepared.image, title: @prepared.title } }
    end

    assert_redirected_to prepared_url(Prepared.last)
  end

  test "should show prepared" do
    get prepared_url(@prepared)
    assert_response :success
  end

  test "should get edit" do
    get edit_prepared_url(@prepared)
    assert_response :success
  end

  test "should update prepared" do
    patch prepared_url(@prepared), params: { prepared: { button: @prepared.button, description: @prepared.description, image: @prepared.image, title: @prepared.title } }
    assert_redirected_to prepared_url(@prepared)
  end

  test "should destroy prepared" do
    assert_difference('Prepared.count', -1) do
      delete prepared_url(@prepared)
    end

    assert_redirected_to prepareds_url
  end
end
