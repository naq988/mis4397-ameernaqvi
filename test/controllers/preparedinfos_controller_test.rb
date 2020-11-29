require 'test_helper'

class PreparedinfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @preparedinfo = preparedinfos(:one)
  end

  test "should get index" do
    get preparedinfos_url
    assert_response :success
  end

  test "should get new" do
    get new_preparedinfo_url
    assert_response :success
  end

  test "should create preparedinfo" do
    assert_difference('Preparedinfo.count') do
      post preparedinfos_url, params: { preparedinfo: {  } }
    end

    assert_redirected_to preparedinfo_url(Preparedinfo.last)
  end

  test "should show preparedinfo" do
    get preparedinfo_url(@preparedinfo)
    assert_response :success
  end

  test "should get edit" do
    get edit_preparedinfo_url(@preparedinfo)
    assert_response :success
  end

  test "should update preparedinfo" do
    patch preparedinfo_url(@preparedinfo), params: { preparedinfo: {  } }
    assert_redirected_to preparedinfo_url(@preparedinfo)
  end

  test "should destroy preparedinfo" do
    assert_difference('Preparedinfo.count', -1) do
      delete preparedinfo_url(@preparedinfo)
    end

    assert_redirected_to preparedinfos_url
  end
end
