Given(/^the app has launched$/) do
  wait_for do
    !query("*").empty?
  end
end

# And(/^I have done a specific thing$/) do
  # Example: Given I am logged in
  #  wait_for do
  #    !query("* marked:'username'").empty?
  #  end
  #
  #  touch("* marked:'username'")
  #  wait_for_keyboard
  #  keyboard_enter_text("cleveruser27")
  #
  #  touch("* marked:'password'")
  #  wait_for_keyboard
  #  keyboard_enter_text("pa$$w0rd")
  #
  #  wait_for_element_exists("* marked:'Login'")
  #  touch("* marked:'Login'")

  # Remember: any Ruby is allowed in your step definitions
#   did_something = true

#   unless did_something
#     fail 'Expected to have done something'
#   end
# end

# When(/^I do something$/) do
  # Example: When I create a new entry
  #  tap("* marked:'new_entry'")
  #  wait_for_keyboard
  #  keyboard_enter_text("* marked:'entry_title'", 'My Entry')
  #
  #  tap("* marked:'submit'")
# end

Then(/^I should see '(.*)'$/) do |expected_mark|
  until element_exists("view marked:'#{expected_mark}'") || element_exists("view text:'#{expected_mark}'")
    screenshot_and_raise "No element found with mark or text: #{expected_mark}"
  end
end

